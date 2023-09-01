export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Pagamento riuscito',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    //throw new Error('Pagamento rifiutato')
};
