import React from 'react';
import Card from "../../components/Card";
import {Box, Button, Flex, Grid} from "@chakra-ui/react";
import {useInfiniteQuery, useQuery} from "react-query";
import {fetchProductList} from "../../api";

function Products(props) {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('projects', fetchProductList, {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 6;

            if (!morePagesExist)
                return;

            return allGroups.length + 1;
        }
    })

    if (status === "loading") return "Loading...";

    if (status === "error") return "An error has occured: " + error.message;

    return (
        <div className={"content"}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item) => (
                                    <Box w={"100%"} key={item._id}>
                                        <Card item={item}/>
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </Grid>
            <Flex justifyContent={"center"} mt={10}>
                <Button
                    isLoading={isFetching}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}>
                    {
                        isFetchingNextPage
                            ? 'Loading more...'
                            : hasNextPage
                                ? 'Load More'
                                : 'Nothing more to load'
                    }

                </Button>
                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </Flex>
        </div>
    );
}

export default Products;