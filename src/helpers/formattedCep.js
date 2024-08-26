export function formatCep(text) {
    let formattedCep = text.replace(/\D/g, '');
    if (formattedCep.length > 5) {
        formattedCep = formattedCep.replace(/(\d{5})(\d)/, '$1-$2');
    }
    return formattedCep;
}
