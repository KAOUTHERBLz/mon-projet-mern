import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../JS/Actions/order";

const OrderCard = ({ newOrders }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOrder(newOrders._id));

  };
  return (
    <div>
      <div className="messageCards">
        <Card>
          <Card.Body>
            <Card.Text>
              <span className="forms">Produit :</span>
              {newOrders.productname}
            </Card.Text>
            <Card.Text>
              <span className="forms">E-mail :</span>
              {newOrders.email}
            </Card.Text>
            <Card.Text>
              <span className="forms">Adresse :</span>
              {newOrders.adresse}
            </Card.Text>
            <Card.Text>
              <span className="forms">phone :</span>
              {newOrders.phone}
            </Card.Text>

            <Button variant="danger" onClick={handleDelete}>
              Supprimer la commande
            </Button>
           
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OrderCard;