import DateContent from "./DateContent"
import ImageContent from "./ImageContent"
import TitleContent from "./TitleContent"

function ContentContainer({ nodes }) {
    const styles = {
        container: {
            display: 'flex',
            marginBottom: "2rem"
        },
        heading: {
            marginLeft: "2rem"
        }
    }

    return (
        <>
            {
                nodes.map((item, index) => {
                    let node = item?.node
                    return (
                        <div key={index} style={styles.container}>
                            <ImageContent node={node} />
                            <div style={styles.heading}>
                                <TitleContent node={node} />
                                <DateContent node={node} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default ContentContainer