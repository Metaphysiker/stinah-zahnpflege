public class Treatment : IModel
{
    public int Id { get; set; }
    public string Note { get; set; } = string.Empty;
    public string NoteForNextTreatment { get; set; } = string.Empty;
    public Horse? Horse { get; set; }
}
