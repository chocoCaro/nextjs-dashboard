import Form from '@/app/ui/invoices/edit-form';
import Breadcrumps from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])

    return (
        <main>
            <Breadcrumps
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    { label: 'Edit Invoice', href: `/dashboard/invoices/${id}/edit`, active: true },
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}