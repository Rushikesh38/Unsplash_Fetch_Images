import '../Components/Css/ImageList.css';
const ImagesList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} src={urls.regular} alt={description} />
    })
    return (
        <>
            <div className="inner-image">
                <div className='image-list'>

                    {images}


                </div>
            </div>

        </>
    )
};
export default ImagesList;