export default class AdvancedSearch {
  constructor() {
    const $advancedSearchForm = $('[data-advanced-search-form]');
    const selectedCategories = [];

    $advancedSearchForm.submit((event) => {
      const $selectedCategoryIds = $('[data-advanced-search-form] input[type="checkbox"]:checked');

      $selectedCategoryIds.each((index, element)=> {
        selectedCategories.push($(element).val());
      });

      for (const categoryId of selectedCategories) {
        const input = $('<input>', {
          type: 'hidden',
          name: 'category',
          value: categoryId,
        });

        $advancedSearchForm.find('input[name="categories"]').val(categoryId).remove();
        $advancedSearchForm.append(input);
      }
    });
  }
}
