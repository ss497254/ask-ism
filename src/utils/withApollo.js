import { createWithApollo } from "../../../src/utils/createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = (ctx) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: [],
              merge(existing, incoming) {
                return {
                  ...incoming,
                  posts: [...(existing?.posts || []), ...incoming.posts],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
