import { useQuery, gql } from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import Head from "next/head";
import { styled } from "styled-components";

type Props = {
    id: string,
};

const ProductStyles = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    justify-content: center;
    align-items: top;
    gap: 2rem;
    max-width: var(--maxWidth);
    img {
        width: 100%;
        object-fit: contain;
    }
`;

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        product(where: { id: $id }) {
            name
            price
            description
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

const SingleProduct = ({ id }: Props) => {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, { variables: { id } });
    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorMessage error={error} />
    const { product } = data;
    return (
        <ProductStyles>
            <Head>
                <title>Sick Fits | {product.name}</title>
            </Head>
            <img src={product.photo.image.publicUrlTransformed} alt={product.photo.image.altText} />
            <div className="details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </ProductStyles>
    );
};

export default SingleProduct;