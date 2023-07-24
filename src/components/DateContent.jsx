
function DateContent({ node }) {

    const formattedDate = (time) => {
        const timestamp = time * 1000;
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        });

        return formattedDate
    }

    return (
        <div>
            {formattedDate(node?.last_update)}
        </div>
    )
}

export default DateContent