import api from "../../api/puppyBowlApi";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    getPuppies: build.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providedTags: ["Puppy"],
    }),

    getPuppy: build.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
      providedTags: ["Puppy"],
  }),

    addPuppy: build.mutation({
      query: (value) => ({

        url: "/players",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: value.name,
          breed: value.breed,
          imageUrl: value.imageUrl,
        }),
      }),
      invalidateTags: ["Puppy"],
    }),

    deletePuppy: build.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidateTags: ["Puppy"],
    }),

  }),
});

export default puppyApi;

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
