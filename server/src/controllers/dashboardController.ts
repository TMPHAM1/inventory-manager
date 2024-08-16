import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const popularProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: "desc", // This will return Products that have the most quantity
            },
        })
        const saleSummary = await prisma.salesSummary.findMany({
            take: 5, 
            orderBy: {
                date: "desc", // This will return most recent sale
            }
        });
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5, 
            orderBy: {
                date: "desc", // This will return most recent sale
            }
        
        });
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5, 
            orderBy: {
                date: "desc", // This will return most recent sale
            }
        
        });
        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5, 
            orderBy: {
                date: "desc", // This will return most recent sale
            }
        });
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => (
            {...item, amount: item.amount.toString()}
        ))

        res.json({
            popularProducts,
            saleSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary
        })
    }
    catch(error) {
        res.status(500).json({message: "Error retrieving dashboard metrics"})   
     }
}