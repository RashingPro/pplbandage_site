import NotFoundElement from '@/components/NotFound';
import { merge } from 'lodash';
import meta from '@/app/meta.json';

export async function generateMetadata() {
    return merge({}, meta.base, meta.notFound);
}

export default function NotFound() {
    return <NotFoundElement />;
}
