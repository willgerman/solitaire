export default function Slugify(str) {
    let slug = str;

    slug = slug.replace(/^\s+|\s+$/g, '');
    slug = slug.toLowerCase();
    slug = slug.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return slug;
}