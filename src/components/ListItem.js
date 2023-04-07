import React from 'react'

function ListItem({item}) {
    const {title, category} = item;

  return (
    <article className="to-do-item">
        <p>{title}</p>
        <div className="control-buttons">
            <button>delete</button>
        </div>
    </article>  )
}

export default ListItem