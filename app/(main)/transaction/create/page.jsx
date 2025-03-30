import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/app/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";



export default async function AddTransactionPage({ searchParams }) {
  // Ensure `searchParams` is properly awaited if it's a Promise.
  const resolvedSearchParams = await searchParams; // Await the searchParams if necessary
  
  const accounts = await getUserAccounts();
  const editId = resolvedSearchParams?.edit; // Now safely access `.edit`

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}