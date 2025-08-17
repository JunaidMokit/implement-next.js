
export default function ReviewDetails({ params }: {
    params: {
        products: string;
        reviewsId: string;
    }
}) {
    return (
        <h1>Review {params.reviewsId} for product {params.products}</h1>
    );
}
