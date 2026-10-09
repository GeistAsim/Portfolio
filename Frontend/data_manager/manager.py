import json
from pathlib import Path
from data import portfolio_data

class PortfolioManager:
    """
    OOP Manager for handling Portfolio Data.
    Responsible for validating and exporting the Python Pydantic data to JSON.
    """
    def __init__(self, data_instance, output_path: str):
        self.data_instance = data_instance
        self.output_path = Path(output_path)

    def export_to_json(self):
        """
        Exports the Pydantic data instance to a JSON file.
        """
        # Ensure the output directory exists
        self.output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Pydantic v2 uses model_dump_json. If using v1, it's .json()
        try:
            json_content = self.data_instance.model_dump_json(indent=2)
        except AttributeError:
            # Fallback for older Pydantic versions
            json_content = self.data_instance.json(indent=2)
            
        with open(self.output_path, "w", encoding="utf-8") as f:
            f.write(json_content)
            
        print(f"✅ Successfully exported portfolio data to {self.output_path}")


if __name__ == "__main__":
    # The output path will be inside the React app's src directory
    OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "portfolio.json"
    
    manager = PortfolioManager(data_instance=portfolio_data, output_path=str(OUTPUT_FILE))
    manager.export_to_json()
