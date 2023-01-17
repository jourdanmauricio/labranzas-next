export async function getCategories() {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
  );
  const categories = await dataCat.json();
  console.log('categories.name', categories);

  return categories.map((cat) => {
    return {
      params: {
        slug: cat.name,
      },
    };
  });
}

export async function getCategory(id) {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/${id}`
  );
  const category = await dataCat.json();

  return category;
}
