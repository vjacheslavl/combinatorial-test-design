import router from '../router';
import { Request, Response } from 'express';
import { TestDesignController } from '../../controller/testDesign.controller';
import { AttributeController } from '../../controller/attribute.controller';
import { ValueController } from '../../controller/value.controller';
import { CombinationsController } from '../../controller/combinations.controller';

const testDesignController: TestDesignController = new TestDesignController();
const attributeController: AttributeController = new AttributeController();
const valueController: ValueController = new ValueController();
const combinationsController: CombinationsController = new CombinationsController();

router
	.route('/testdesigns')
	.get((req: Request, res: Response) => {
		if (req.query.id) {
			testDesignController.getTestDesign(req.query.id as string).then(data => res.json(data));
		} else {
			testDesignController.getTestDesigns().then(data => res.json(data));
		}
	})
	.post((req: Request, res: Response) => {
		testDesignController.createTestDesign(req.body).then(data => res.json(data));
	})
	.put((req: Request, res: Response) => {
		testDesignController.updateTestDesign(req.body).then(data => res.json(data));
	})
	.delete((req: Request, res: Response) => {
		testDesignController.deleteTestDesigns(req.body).then(() => res.json({}));
	});

router
	.route('/attributes')
	.get((req: Request, res: Response) => {
		attributeController.getAttributes(req.query.id as string).then(data => res.json(data));
	})
	.post((req: Request, res: Response) => {
		attributeController.createAttribute(req.body).then(data => res.json(data));
	})
	.put((req: Request, res: Response) => {
		attributeController.updateAttribute(req.body).then(data => res.json(data));
	})
	.delete((req: Request, res: Response) => {
		attributeController.deleteAttributes(req.body).then(() => res.json({}));
	});

router
	.route('/values')
	.get((req: Request, res: Response) => {
		valueController.getValues(req.query.id as string).then(data => res.json(data));
	})
	.post((req: Request, res: Response) => {
		valueController.createValue(req.body).then(data => res.json(data));
	})
	.put((req: Request, res: Response) => {
		valueController.updateValue(req.body).then(data => res.json(data));
	})
	.delete((req: Request, res: Response) => {
		valueController.deleteValues(req.body).then(() => res.json({}));
	});

router.route('/combinations').get((req: Request, res: Response) => {
	if (req.query.id) {
		combinationsController.getCombinations(req.query.id as string).then(data => res.json(data));
	}
});

export default router;
