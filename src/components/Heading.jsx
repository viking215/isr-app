const Heading = ( {title, tag}) => {
    const Tag = tag || 'h2'

    return (
      <Tag>{title}</Tag>
    )
}

export default Heading