import {Card , Button} from"react-bootstrap"


export const CardList = ({el:  { name, secondName, photo, desc }}) => {
  const FunctionClick = () => {
    const FunctionHandler = () => {
        alert("Bonjour " + name )
    }
    return (
        <div>
             <Button  onClick={FunctionHandler}>  Me </Button>
        </div>
    )
}

    return (
        <div>
            <Card style={{ width: "18rem", margin: "40px 0 40px 0" }}>
        <Card.Img variant="top" src ={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{secondName}</Card.Title>
          <Card.Text>{desc || "No descreption"}</Card.Text>
         <FunctionClick/>
        </Card.Body>
      </Card>
        </div>
    )
   
}

