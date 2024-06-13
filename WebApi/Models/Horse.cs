public class Horse : IModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateOnly LastTimeTreated { get; set; } = DateOnly.FromDateTime(DateTime.Now);
    public int NumberOfWeeksUntilNextTreatment { get; set; } = 0;
}
