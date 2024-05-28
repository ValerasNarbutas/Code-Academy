import db from "./db.js";

export async function addItem(req, res) {

    try {
        const { title } = req.body;  

        if (!title) {
            throw new Error("Title is required");
        }

        const { rows } = await db.query(
          `insert into items (title) values ('${title}') returning *`
        );

        res.json({ data: rows[0] });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

export async function getItems(req, res) {
    const { limit } = req.query;

    let query = "select * from items ";

    if (limit !== undefined) {
        query += `limit ${limit} `;
    }

    const { rows } = await db.query(query);

    res.json(rows);
}

export async function deleteItemById(req, res) {
    const { id } = req.params;

    const resposne = await db.query(`delete from items where id = ${id} returning *`);

    console.log(resposne);
    
    res.json({ success: true });
}
