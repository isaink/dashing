const db = require('../connector');

const getAllSrvByPro = (req, res, next) => {
    db.any('SSELECT providers.id AS provider_id, name, email, avatar, borough, phone_number, website_link FROM providers JOIN services_provider ON providers.id = services_provider.provider_id WHERE service_id = ${id}', {
        id: Number(req.params.id)
    })
    .then(data => {
        res.status(200).json({
            status: 'Success',
            message: 'Got all services by this provider.',
            data: data
        });
    })
    .catch(err => {
        res.status(400).json ({
            status: 'Failure',
            message: 'Failed to get all services by this provider'
        })
        next(err);
    })
}

module.exports = {
    getAllSrvByPro
} 