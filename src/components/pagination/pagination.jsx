import React,{useState} from 'react'
import './pagination.css'

function selectPage(currentPage){
    //arrayPagination=Array.apply(null, Array(10)).map(() => {return 1});
    let arrayPagination=[]
    if(currentPage>5){
        for(let i=currentPage-5;i<=currentPage+5;i++){
            arrayPagination.push(i)
        }
       
    }
    else{
        for(let i=1;i<=10;i++){
            arrayPagination.push(i)
        }
    }
    
    return arrayPagination;
}
export default function Pagintation(props){
    
    const pages=(selectPage(props.currentPage));
    const styleCard="selectedCard";
    
    return(
        <div className="buttomContainer">
            {
                pages.map((element,index)=>{
                return(
                    <div className="buttomCard" onClick={() => props.fetchPageFn(element)}>
                    {element}
                </div>
                    ) 
                })
            }
        </div>
    )
}