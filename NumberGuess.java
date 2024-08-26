import java.util.Scanner;

public class NumberGuess {
    public static void main(String[] args) {
        System.out.println("Du skal nu gætte et tal mellem 1 og 100");

        Scanner scanner = new Scanner(System.in);
        int secret = (int)Math.floor(Math.random() * 100);
        // int secret = 51;
        int guess;
        int guessCount = 0;

        do {
            System.out.println("Indtast dit gæt her:");
            guess = scanner.nextInt();
            guessCount++;

            if (guess > secret) {
                System.out.println("Dit gæt er for højt. Prøv igen");
            } else if (guess < secret) {
                System.out.println("Dit gæt er for lavt. Prøv igen");
            }
        } while (guess != secret);

        System.out.println("______________________");
        System.out.println("Du har gættet rigtigt!");
        System.out.println("Tallet var: " + secret);
        System.out.println("Antal gæt: " + guessCount);
        System.out.println("______________________");
        scanner.close();
    }
}
