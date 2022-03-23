import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateThumbnailImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickChange = () => {
    updateThumbnailImage(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickChange}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
