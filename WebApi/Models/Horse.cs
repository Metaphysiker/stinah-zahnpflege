public class Horse : IModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public DateTime LastTimeTreated { get; set; } = DateTime.Now;
    public int NumberOfWeeksUntilNextTreatment { get; set; } = 0;
    public string NoteForNextTreatment { get; set; } = string.Empty;
    public ICollection<Horse> Horses { get; } = new List<Horse>();
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public string FileKeysString { get; set; } = string.Empty;
}
