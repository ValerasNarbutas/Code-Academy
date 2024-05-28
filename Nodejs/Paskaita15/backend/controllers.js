import db from "./db.js";

export async function addCar(req, res) {
  try {
    const { title, image, price, numberplates } = req.body;

    // Validating if the user has entered information correctly

    if (!title || !image || !price || !numberplates) {
      return res.status(400).json({ error: "Relevant information is required to proceed" });
    }

    // Checking if the user has entered a number for the price section

    if (isNaN(price)) {
        return res.status(400).json({ error: "Price must be a number" });
    }

    // Inserting given data into the database 

    const { rows } = await db.query(
      `insert into cars (title, image, price, numberplates) values ('${title}', '${image}', ${price}, '${numberplates}') returning *`
    );

    res.status(201).json({ data: rows[0] });
  } catch (error) {
    console.log("Error adding car");
    res.status(500).json({ error: "Error occured while adding the car into the database" });
  }
}

export async function getCars(req, res) {
    try {
        const { limit } = req.query;

        let query = "select * from cars ";

        if (limit !== undefined) {
            query += `limit ${limit} `;
        }

        const { rows } = await db.query(query);

        res.json(rows);
    } catch (error) {
        console.log("Error fetching cars");
        res.status(500).json({ error: "Error occured fetching cars" });
    }
}

export async function getCarById(req, res) {
    try {
        const { id } = req.params;

        // Checking if user has entered a valid ID

        if (isNaN(id)) {
            return res.status(400).json({ error: "ID must be a number" });
        }

        const query = `select * from cars where id = ${id}`;
        const { rows } = await db.query(query);

        // Checking if the ID exists
        if (rows.length === 0) {
            return res.status(404).json({ error: "Car not found" });
        }

        res.json({ data: rows[0] });
    } catch (error) {
        console.log("Error fetching car by ID");
        res.status(500).json({ error: "Error occured fetching car by ID"});
    }
}

export async function deleteCarById(req, res) {
    try {
        const { id } = req.params;

        // Checking if the user provided ID correctly

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "Enter a valid ID"});
        }

        const query = `delete from cars where id = ${id} returning *`;
        const { rows } = await db.query(query);

        // Checking if the given ID exists

        if (rows.length === 0) {
            return res.status(404).json({ error: "Car not found" });
        }

        res.json({ success: true });
    } catch (error) {
        console.log("Error deleting car by ID");
        res.status(500).json({ error: "Error occured while deleting the car" });
    }
}