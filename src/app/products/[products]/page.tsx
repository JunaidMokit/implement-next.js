
export default function ProductList({ params }: { params: { products: string } }) {
    return (
        <h1>Details Of Product {params.products}</h1>
    );
}
