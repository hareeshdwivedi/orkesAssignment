
function ImageContent({ node }) {
    const styles = {
        width: '18rem',
        height: "11rem",
        borderRadius: '50px',
    }
    return (
        <div>
            <img style={styles} src={node?.ImageStyle_thumbnail} alt={node?.author_name} />
        </div>
    )
}

export default ImageContent