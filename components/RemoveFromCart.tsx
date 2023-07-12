import { ApolloCache, gql, useMutation } from "@apollo/client";
import styled from "styled-components";

const BigButton = styled.button`
    font-size: 3rem;
    background: none;
    border: 0;
    &:hover {
        color: var(--red);
        cursor: pointer;
    }
`;

const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(where: {id: $id}) {
            id
        }
    }
`;

const update = (cache: any, payload: any) => {
    cache.evict(cache.identify(payload.data.deleteCartItem))
};

const RemoveFromCart = ({ id }: {id: string}) => {
    const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
        variables: { id },
        update,
        optimisticResponse: {
            deleteCartItem: {
                __typename: "CartItem",
                id,
            },
        },
    });
    return (
        <BigButton onClick={() => {removeFromCart()}} disabled={loading} type="button" title="Remove This Item from Cart">
            &times;
        </BigButton>
    )
};

export default RemoveFromCart;