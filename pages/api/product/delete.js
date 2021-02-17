//delete doc
export const todo_delete = (req, res, next) => {
    MultipleFile.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err);
      res.send("Item Deleted");
    });
  };
  