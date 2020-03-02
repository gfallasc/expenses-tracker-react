import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const TransactionListItem = ({ transaction }: any) => {
  return (
    <ListItem>
      <ListItemText primary={transaction.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Delete transaction">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
