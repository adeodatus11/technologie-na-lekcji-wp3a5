"""Publiczna wersja warsztatu: bez harmonogramów i długości zadań."""

import re


def review(d):
    d["date"] = "28.09.2026"
    d["prepared_date"] = "27.10.2026"
    d["version"] = 3
    d.pop("short", None)
    for p in d["parts"]:
        p.pop("time", None)
    for s in d["stages"]:
        s.pop("time", None)
    d["fields"][7] = [
        "duration",
        "Kolejność działań ucznia",
        "Najpierw przykład, potem własna próba i sprawdzenie",
    ]
    d["fields"] += [
        [
            "own",
            "Moje materiały i dodatkowe źródła",
            "Tytuł pliku lub pełny adres źródła; autor i warunki wykorzystania",
        ],
        [
            "delivery",
            "Jak przekażę zadanie uczniom?",
            "Projektor, urządzenie na parę lub praca indywidualna; link albo przypisane zadanie",
        ],
    ]
    d["example"]["duration"] = (
        "Porównanie dwóch przykładów, własna odpowiedź, rozmowa w parze i sprawdzenie uzasadnienia."
    )
    d["example"]["own"] = "Dwa opisy telefonów przygotowane przez nauczyciela, bez danych uczniów."
    d["example"]["delivery"] = (
        "Wyświetlam przykłady na projektorze. Każdy zapisuje odpowiedź, następnie porównuje ją z partnerem."
    )
    d["deck"]["facts"] = [
        "4 listopada 2026",
        "Wspólny pokaz i praca w pracowniach",
        "Własny temat i gotowy materiał",
    ]
    d["deck"]["outcomes"] = [
        "Wybrany fragment ZPE.",
        "Polecenie i kryterium odpowiedzi.",
        "Materiał do własnej klasy.",
        "Instrukcje do samodzielnego powrotu.",
    ]
    d["preflight"] = [
        "Sprawdź logowanie, wyszukiwanie, Ulubione i ponowne otwarcie na koncie trenera.",
        "Przetestuj udostępnienie i rejestrowanie odpowiedzi na kontach testowych. Nie pokazuj danych uczniów.",
        "Sprawdź projektor, internet i stanowiska w pracowniach na trzecim piętrze.",
        "Poproś uczestników o własny temat i dostępne materiały. Hasła wpisują wyłącznie w ZPE.",
        "Przygotuj wydruki na wypadek problemów technicznych.",
    ]

    # Zachowujemy klucze formularza, żeby odczytać dotychczasowe zapisy.
    def clean(x):
        if isinstance(x, str):
            x = re.sub(r"\b\d+[–−-]\d+\s*min(?:ut\w*)?\b", "krótki fragment", x)
            x = re.sub(r"\b\d+\s*min(?:ut\w*)?\b", "", x)
            return x
        if isinstance(x, list):
            return [clean(v) for v in x]
        if isinstance(x, dict):
            return {k: clean(v) for k, v in x.items() if k not in ("minutes", "time", "min")}
        return x

    return clean(d)
