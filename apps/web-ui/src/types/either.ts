type Either<L, R> = { kind: 'left', value: L } | { kind: 'right', value: R };
const Either = {
    left: <L, R>(value: L): Either<L, R> => ({ kind: 'left', value }),
    right: <L, R>(value: R): Either<L, R> => ({ kind: 'right', value }),
};

export { Either };