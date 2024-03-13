import { useParams } from "react-router-dom";
import { invoices } from "../data/invoices";

const Invoice = () => {
    const params = useParams<{ invoiceId: string }>();

    // Tìm kiếm invoice trong mảng invoice có id giống URL
    const invoice = invoices.find((invoice) => invoice.id.toString() === params.invoiceId);

    return <h2 style={{ padding: "1rem" }}>{invoice ? `  Invoice #${invoice?.id} for ${invoice?.name}` : "Not Invoice Found "}</h2>;
};

export default Invoice;
