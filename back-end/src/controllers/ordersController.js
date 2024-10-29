    import db from "../config/database.js";

    const createOrder = async (req, res) => {
        const { mesa, plates_id } = req.body; 
        const status = "preparando";
        if(!mesa && !plates_id && plates_id.length === 0){
        res.status(400).send({
            message: "mesa não existe"
        })
        }
        const [ results, fields ] = await db.query(
        "INSERT INTO orders (mesa, status) VALUES (?, ?)",
        [mesa, status]
        );
        const orderId = results?.insertId;
        plates_id?.forEach(async (item) => {
            await db.query(
                "INSERT INTO orders_plates (plate_id, order_id, quantidade) VALUES (?, ?, ?)",
                [item.id, orderId, item.qtd]
            )
        });
        res.status(200).send({
        message: "Seu pedido foi anotado!",
        body: {
            order: { mesa, status }
        }})
    };

    const listOrder = async (req, res) => {
        const [ results ] = await db.query('SELECT o.id, op.plate_id, o.mesa, op.quantidade FROM orders o JOIN orders_plates op ON op.order_id = o.id WHERE o.status NOT IN ("finalizado", "cancelado")')
        const formattedData = Object.values(results.reduce((acc, item) => {
            const { id, plate_id, quantidade, mesa } = item;
        
            // Se o pedido ainda não existe no acumulador, cria uma nova entrada
            if (!acc[id]) {
                acc[id] = {
                    numero_do_pedido: id,
                    mesa,
                    pratos: []
                };
            }
        
            // Adiciona o prato ao pedido atual
            acc[id].pratos.push({ plate_id, quantidade });
        
            return acc;
        }, {}));
        res.status(200).send(formattedData);
    };

    const findOrderById = async (req, res) => {
        const orderId = parseInt(req.params.id);
        const [ results ] = await db.query('SELECT * FROM orders WHERE id = ?', [orderId]);
        res.status(200).send(results[0]);
    };

    const updateOrderById = async (req, res) => {
        const orderId = parseInt(req.params.id);
        const { status } = req.body;
        const response = await db.query(
          "UPDATE orders SET status = ? WHERE id = ?",
          [status, orderId]
        );
        res.status(200).send({ message: "Product Updated Successfully!" });
    };

    const ordersController = {
        createOrder,
        listOrder,
        findOrderById,
        updateOrderById
      }
      
      export default ordersController;