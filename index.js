const express = require("express");
const res = require("express/lib/response");
const app = express();
const add = (n1, n2) => {
    return n1 + n2;
};

const subtract = (n1, n2) => {
    return n1 - n2;
};

const multiply = (n1, n2) => {
    return n1 * n2;
};

const divide = (n1, n2) => {
    return n1 / n2;
};

const exponentiate = (n1, n2) => {
    return n1 ** n2;
};

const square = (n1, n2) => {
    return Math.sqrt(n1 * n2 + n1 * n2);
};

const modulo = (n1, n2) => {
    return n1 % n2;
};

app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        const result = add(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        const result = subtract(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        const result = multiply(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        if (n1 === 0 || n2 === 0) { 
            throw new Error("Cannot divide by zero");
        }        

        const result = divide(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/exponentiate", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        const result = exponentiate(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/square", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }

        const result = square(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/modulo", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log();
            throw new Error("Parsing Error");
        }
        
        if (n1 === 0 || n2 === 0) { 
            throw new Error("Cannot perform modulo by zero");
        } 

        const result = modulo(n1, n2);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});
