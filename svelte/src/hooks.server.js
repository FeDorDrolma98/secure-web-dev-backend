export function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.jwt = jwt ? jwt : null;
    return resolve(event);
}