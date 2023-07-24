import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";

import ContentContainer from "../components/ContentContainer"

import { getFeeds } from "../services/apiServices"

function HomePage() {

    const [page, setPage] = useState(1);
    const [nodes, setNodes] = useState([]);
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        fetchFeeds()
    }, [])

    function fetchFeeds() {
        getFeeds(page)
            .then(data => {
                if (data?.nodes) {
                    let nodes = data.nodes;
                    setNodes((prev) => [...prev, ...nodes])
                    setPage((prevPage) => prevPage + 1);
                } else {
                    setHasMore(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const styles = {
        margin: "auto 10rem",
    }

    return (

        <InfiniteScroll
            dataLength={nodes.length}
            next={fetchFeeds}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
            endMessage={<p>No more data to load.</p>}
        >
            <div style={styles}>
                <ContentContainer nodes={nodes} />
            </div>
        </InfiniteScroll>
    )
}

export default HomePage