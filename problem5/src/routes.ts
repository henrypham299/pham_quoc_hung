import { Router} from 'express';
import { createResource, listResources, getResource, updateResource, deleteResource } from './controllers/resources';
import { loginRoute } from './controllers/users';
import { body, query, param } from 'express-validator';
import { authenticateToken } from './middlewares/authenticateToken';
import { validationRequest } from './middlewares/validateRequest';
import Resource from './models/resource';
import { Op } from 'sequelize';

const router = Router();

router.post('/resources', [
    body('name')
        .isString()
        .notEmpty()
        .custom(async (value) => {
            const resource = await Resource.findOne({where: {name: value}});
            if (resource) {
                throw new Error(`Resource name ${value} already in use`);
            }
        }),
    body('description')
        .isString()
        .optional(),
], authenticateToken, validationRequest, createResource);

router.get('/resources', [
    query('name')
        .optional()
        .isString(),
], authenticateToken, listResources);
router.get('/resources/:id', authenticateToken, getResource);
router.put('/resources/:id', [
    body('name')
        .isString()
        .notEmpty()
        .custom(async (value, { req }: {req: any}) => {
            const resource = await Resource.findOne({where: {name: value, id: {[Op.ne]: req.params.id}}});
            if (resource) {
                throw new Error(`Resource name ${value} already in use`);
            }
        }),
    body('description')
        .isString()
        .optional(),
], authenticateToken, validationRequest, updateResource);
router.delete('/resources/:id', authenticateToken, deleteResource);

router.post('/login', [
    body('password')
        .isString()
        .notEmpty()
        .escape(),
    body('email')
        .trim()
        .isEmail()
        .notEmpty()
        .escape(),
], validationRequest, loginRoute);

export default router;
