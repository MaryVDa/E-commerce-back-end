const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{
      model: Product, through: ProductTag, as: 'product_tags'
    }],
  })
    .then((tags) => res.json(tags))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findByPk(req.params.id);
    res.status(200).json(productData);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const productData = await Tag.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      name: req.body.name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const productData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'No tag found with this id.'});
      return;
    }
    res.status(200).json(productData);
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
