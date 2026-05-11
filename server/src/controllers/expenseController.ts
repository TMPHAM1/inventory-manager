import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getExpensesByCategory = async (
    req: Request,
    res: Response,
): Promise<void> => { 
    try{
        const expenseByCategorySummary = await prisma.expenseByCategory.findMany({
            orderBy: {
                date: "desc"
            }
        });
        res.json(expenseByCategorySummary)
    }
    catch(error) {
        res.status(500).json({message: "Error retrieving dashboard metrics"})   
     }
}