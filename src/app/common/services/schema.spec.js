(function () {
  'use strict';

  describe('CommonSchemaService', function () {

    beforeEach(module('sales.common'));

    describe('applyData', function () {

      it('should return data with schema structure', inject(function (CommonSchemaService) {

        var structure = {
          id: 1,
          name: null,
          country: null
        };

        var data = CommonSchemaService.applyDataToStructure(structure, {
          name: 'abbish',
          age: 20
        });

        expect(data.id).toBeDefined();
        expect(data.id).toBe(1);
        expect(data.name).toBeDefined();
        expect(data.name).toBe('abbish');
        expect(data.country).toBeDefined();
        expect(data.country).toBeNull();
        expect(data.age).toBeUndefined();
      }));

    });
  });

})();
