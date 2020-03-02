import React from 'react'
import { makeStyles, Theme, createStyles, Typography, List } from '@material-ui/core';
import { TransactionListItem } from './TransactionListItem';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '100%'
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        }
    }),
);
export const TransactionList = () => {
    const classes = useStyles();
    const [dense] = React.useState(false);
    const transactions = [
        {
            id: 1,
            name: 'Internet'
        },
        {
            id: 2,
            name: 'Cable'
        }
    ];

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.title}>
             Latest Transactions
            </Typography>
            <List dense={dense}>
                { transactions.map(transaction => (<TransactionListItem key={transaction.id} transaction={transaction} />))}
            </List>
        </div>
    )
}
