import React from 'react'
import { CardList } from '../card/CardList'
import './cardlist.css'
import"react-bootstrap"

export const ListCard = ({team}) => {
    return (
        <div className="cardslist"> 
            {
                team.map((el,index) => (
                    <CardList el={el} />
                ))
            }
            
        </div>
    )
}
