// import { getCategories, getCategory } from '../../libs/categories';

import PageLayout from '@/components/PageLayout';
import Menu from '@/components/Menu/Menu';

const Category = ({ category }) => {
  console.log('category', category);
  return (
    <PageLayout>
      <h1>Category</h1>

      {category.full_name}

      {/* <Menu categories={categories}></Menu> */}
    </PageLayout>
  );
};

export default Category;

export async function getCategory(name) {
  console.log('NAME', name);
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/categoryweb/${name}`
  );
  const category = await dataCat.json();

  return category;
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.name);
  return {
    props: {
      category,
    },
  };
}

export async function getCategories() {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
  );
  const categories = await dataCat.json();
  console.log('categories.name', categories);

  return categories.map((cat) => {
    return {
      params: {
        name: cat.name,
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getCategories();
  return {
    paths,
    fallback: false,
  };
}
