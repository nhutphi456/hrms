export function mapToDropdownOptions<T>(
  data: T[],
  labelKey: keyof T,
  valueKey: keyof T,
  additionalKeys = {},
) {
  return data.map(item => ({
    label: item[labelKey] as string,
    value: item[valueKey] as number,
    ...additionalKeys,
  }));
}
