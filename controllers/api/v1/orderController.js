const index = (req, res) => {
  res.json({
    status: "success",
    data: {
      orders: [],
    },
  });
};

const getOrderById = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
      },
    },
  });
};

const create = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        text: "Order created",
      },
    },
  });
};

const update = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order updated",
      },
    },
  });
};

const remove = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order deleted",
      },
    },
  });
};

module.exports = {
  index,
  getOrderById,
  create,
  update,
  remove,
};
